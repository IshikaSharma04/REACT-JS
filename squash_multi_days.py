import subprocess
import os
from collections import defaultdict

log_output = subprocess.check_output(
    ["git", "log", "--reverse", "--format=%H %cd", "--date=short"], text=True
).strip().split('\n')

commits_by_date = defaultdict(list)
for line in log_output:
    if not line.strip():
        continue
    commit_hash, date_str = line.split(" ", 1)
    commits_by_date[date_str.strip()].append(commit_hash)

TARGET_DATES = [d for d in commits_by_date.keys() if any(k in d for k in ["07-15", "07-16", "07-17", "07-18"])]

NEW_MESSAGES_PER_DAY = [
    "docs(notes): update React concepts and state management notes",
    "refactor(code): clean up component logic and formatting"
]

all_target_commits = []
for day in TARGET_DATES:
    all_target_commits.extend(commits_by_date[day])

first_commit = all_target_commits[0]

try:
    parent_hash = subprocess.check_output(
        ["git", "rev-parse", f"{first_commit}~1"], text=True, stderr=subprocess.DEVNULL
    ).strip()
    subprocess.run(["git", "checkout", "-b", "temp-clean-branch", parent_hash])
except subprocess.CalledProcessError:
    subprocess.run(["git", "checkout", "--orphan", "temp-clean-branch"])
    subprocess.run(["git", "rm", "-rf", "."])

for day in TARGET_DATES:
    day_commits = commits_by_date[day]
    chunk_size = max(1, len(day_commits) // len(NEW_MESSAGES_PER_DAY))
    for i, msg in enumerate(NEW_MESSAGES_PER_DAY):
        if i == len(NEW_MESSAGES_PER_DAY) - 1:
            chunk = day_commits[i * chunk_size:]
        else:
            chunk = day_commits[i * chunk_size : (i + 1) * chunk_size]
        
        if not chunk:
            continue

        last_hash = chunk[-1]
        commit_date = subprocess.check_output(
            ["git", "log", "-1", "--format=%aI", last_hash], text=True
        ).strip()

        subprocess.run(["git", "checkout", last_hash, "--", "."])
        subprocess.run(["git", "add", "-A"])
        
        env = os.environ.copy()
        env["GIT_AUTHOR_DATE"] = commit_date
        env["GIT_COMMITTER_DATE"] = commit_date
        
        subprocess.run(["git", "commit", "-m", msg], env=env)

print("Squashing complete on temporary branch!")
