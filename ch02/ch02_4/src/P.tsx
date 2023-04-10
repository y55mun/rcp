import type {FC, PropsWithChildren} from 'react'
02;
export type PProps = {}

const P: FC<PropsWithChildren<PProps> = props => {
  return <p {...props} />
}
export default P
