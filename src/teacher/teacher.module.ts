import { Module } from '@nestjs/common';
import { TeacherService } from './services/teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from './schema/teacher.schema';
import { Program,ProgramSchema } from 'src/program/schema/program.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Teacher.name, schema: TeacherSchema }
   ,{ name: Program.name, schema: ProgramSchema }
])],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
