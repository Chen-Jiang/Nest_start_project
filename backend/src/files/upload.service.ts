import {Injectable} from "@nestjs/common";
import {MulterOptionsFactory, MulterModuleOptions} from "@nestjs/platform-express";
import * as GridFsStorage from 'multer-gridfs-storage';


@Injectable()
export class UploadService implements MulterOptionsFactory {
    gridFsStorage: GridFsStorage;
    constructor() {
        this.gridFsStorage = new GridFsStorage({
            url: 'mongodb://localhost/house-app',
            file: (req, file) => {
                return new Promise(((resolve, reject) => {
                    const filename = file.originalname.trim();
                    const fileInfo = {
                        filename: filename
                    };
                    resolve(fileInfo);
                }))
        }
        })
    }

    createMulterOptions(): MulterModuleOptions {
        return {
            storage: this.gridFsStorage,
        };
    }
}
