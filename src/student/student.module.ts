import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 

import { StudentService } from './services/student.service';
import { StudentController } from './student.controller';

import { Student, StudentSchema } from './schema/student.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
