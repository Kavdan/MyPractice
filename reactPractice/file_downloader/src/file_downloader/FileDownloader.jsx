import {React, useState} from 'react'
import Button from './UI/button/Button'
import Input from './UI/input/Input'
import classes from './fileDownloader.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUrls } from './features/store'
import { useFile } from './hooks/useFile'
import { downloadThroughLink } from './utils/downloadThroughLink'

const FileDownloader = () => {
  const [url, setUrl] = useState("");
  const [fileName, setFileName] = useState("")
  const urls = useSelector(getUrls);
  const dispatch = useDispatch();

  const resetFields = () => {
    setFileName("");
    setUrl("");
  }
  const getFile = (e) => {
    e.preventDefault();
    if(!url.length || !fileName.length) {
      alert("Введите имя или вставьте ссылку")
      return;
    } 
    useFile(url).then(selectedUrl => selectedUrl.blob())
    .then(blob => {
      downloadThroughLink(blob, fileName)
    }).catch(error => console.log("Smth went wrong!"))
    resetFields();
  }

  return (
    <div className={classes.background}>
        <div className={classes.app}>
          <h1>File DownLoader</h1>
          <hr />
          <div>
          <Input value={fileName} 
                 placeholder="SET NAME" 
                 onChange={(e) => setFileName(e.target.value)}/>

          <Input value={url} 
                 onChange={(e) => setUrl(e.target.value)} 
                 placeholder="PASTE LINK"/>

          <Button onClick={e => getFile(e)}>download file</Button>
          </div>
        </div>
    </div>
  )
}

export default FileDownloader