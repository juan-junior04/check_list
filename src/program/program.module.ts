import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProgramService } from './services/program.service';
import { ProgramController } from './program.controller';

import { Program, ProgramSchema} from './schema/program.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Program.name, schema: ProgramSchema }])],
  controllers: [ProgramController],
  providers: [ProgramService],
})
export class ProgramModule {}
