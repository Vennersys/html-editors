import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';

import { useRef } from 'react';

function ReactEmailEditor({
  design,
  onHtmlExport,
}: {
  design?: any;
  onHtmlExport?: (val: any) => void;
}) {
  const emailEditorRef = useRef<EditorRef>(null);

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml(data => {
      console.log('exportHtml', data);
      if (onHtmlExport) onHtmlExport(data);
    });
  };

  const onReady: EmailEditorProps['onReady'] = unlayer => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    unlayer.loadDesign(design);
  };

  return (
    <div>
      <EmailEditor ref={emailEditorRef} data-testid="react-html-editor" onReady={onReady} />
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
    </div>
  );
}

export default ReactEmailEditor;
