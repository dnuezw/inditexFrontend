import { useParams } from 'react-router-dom'
import { titles } from '../../../common/titles'
import { TableProvider } from '../../../context/table/TableProvider'
import Table from '../table/Table'
import './editor.css'

type EditorParams = {
  ids: string
}

const Editor: React.FC = () => {
  const { ids } = useParams<EditorParams>()

  if (!ids) return <></>

  return (
    <div className='editor'>
      <h1>{titles.product}</h1>
      <TableProvider>
        <Table productIds={ids} />
      </TableProvider>
    </div>
  )
}

export default Editor
