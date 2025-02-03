import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function QuillEditor({ html }: { html?: string }) {
  const [content, setContent] = useState(html);

  return <ReactQuill theme="snow" value={content} onChange={setContent} />;
}

export default QuillEditor;
