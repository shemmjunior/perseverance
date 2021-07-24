import React from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

export default function UploadField() {
  return (
      <Upload.Dragger>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Support for a single file only upto 10MB</p>
      </Upload.Dragger>
  );
}
