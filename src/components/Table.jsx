export const Table = ({ data }) => <table><tbody>{data.map((r, i) => <tr key={i}><td>{r}</td></tr>)}</tbody></table>;
