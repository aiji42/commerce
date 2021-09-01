import { FC } from 'react'

const Grid: FC = ({
  children
}) => {
  return <div className="max-w-4xl mx-2 md:m-auto flex flex-col">{children}</div>
}

export default Grid

