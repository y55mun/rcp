import type {ChangeEvent} from 'react'

export default function FileInpu() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i)
        console.log('file[${i}]: ', file)
      }
    }
  }
  return (
    <div>
      <p>FileInput</p>
      <input type="file" onChange={onChange} multiple accept="image/*" />
    </div>
  )
}
