import { memo } from 'react';
export const Card = memo(({ title, body }) => <div className="card"><h3>{title}</h3><p>{body}</p></div>);
