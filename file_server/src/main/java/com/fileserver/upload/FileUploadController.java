package com.fileserver.upload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/upload")
public class FileUploadController {

    @Autowired
    FileUploadService fileUploadService;

    @PostMapping
    public String uploadFile(@RequestParam("file") MultipartFile file) throws IllegalStateException {
        try {
            fileUploadService.uploadFile(file);
            return  "Sucessfully Uploaded";
        } catch (IOException ex) {
            return "Could not determine file type.";
        }
    }

    @GetMapping("/{fileName}")
    public String getFile(@PathVariable String fileName) {
        return fileName;
    }

}
