// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import React from "react";

export default function MyEditor(props) {
  return (
    <CKEditor
      editor={Editor}
      config={
        {
          readOnly: true,
        }
      }
      data={props.data}
      onChange={props.onChange}
    />
  );
}
