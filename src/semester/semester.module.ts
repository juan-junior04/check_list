import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SemesterService } from './services/semester.service';
import { SemesterController } from './semester.controller';

import { Semester, SemesterSchema } from './schema/semester.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Semester.name, schema: SemesterSchema }])],
  controllers: [SemesterController],
  providers: [SemesterService],
})
export class SemesterModule {}
