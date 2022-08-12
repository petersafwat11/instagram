import React from 'react'
import modelState from '../atom/modelState'
import { useRecoilState } from 'recoil';
const UploadModel = () => {
    const [open, setOpen] = useRecoilState(modelState);
  return (
    <div>
      <h1>fkjfgjgfjifgjfgjfgklfgljljli</h1>
      {open&& <div>ddddddd</div>}
    </div>
  )
}

export default UploadModel
