import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function QuillEditor({ html, onHtmlChange }: { html?: string, onHtmlChange?: (val: string) => void }) {
  const [content, setContent] = useState(html);
  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    if (quillRef.current) {
      console.log("Quill instance:", quillRef.current);
    }
  }, []);

  useEffect(() => {
    if (html !== content) setContent(html);
  }, [html])

  const handleHtmlUpdate = (val: string) => {
    if (onHtmlChange) onHtmlChange(val);
    setContent(val);
  }

  return <ReactQuill
    ref={quillRef}
    data-testid="quill-editor"
    theme="snow"
    value={content}
    onChange={handleHtmlUpdate} />;
}

export default QuillEditor;
