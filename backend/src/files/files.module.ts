import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';

@Module({
    imports: [
        MulterModule.registerAsync({
            useClass: UploadService
        })
    ],
    controllers: [FilesController],
    providers: [FilesService]
})
export class FilesModule {}
