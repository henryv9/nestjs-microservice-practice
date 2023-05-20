import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';

@Module({
    imports: [MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configureService: ConfigService) => ({
            uri: configureService.get('MONGODB_URI')
        }),
        inject: [ConfigService]
    })]
})
export class DatabaseModule {}
