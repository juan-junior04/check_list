import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TeacherModule } from './teacher/teacher.module';
import { ProgramModule } from './program/program.module';
import { StudentModule } from './student/student.module';
import { SemesterModule } from './semester/semester.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/database_students'),
    TeacherModule,
    ProgramModule,
    StudentModule,
    SemesterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
