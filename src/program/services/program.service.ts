import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProgramDto } from '../dto/create-program.dto';
import { UpdateProgramDto } from '../dto/update-program.dto';

import { Program } from '../schema/program.schema';

@Injectable()
export class ProgramService {
  constructor(@InjectModel(Program.name) private readonly programModel: Model<Program>) {}

  async create(createProgramDto: CreateProgramDto): Promise<Program> {
    const createdProgram = new this.programModel(createProgramDto);
    return createdProgram.save();
  }

  async findAll(): Promise<Program[]> {
    return this.programModel.find().populate('semester').exec(); 
  }

  async findOne(id: string): Promise<Program> {
    const program = await this.programModel.findById(id).exec();
    if (!program) {
      throw new NotFoundException(`Program with id ${id} not found`);
    }
    return program;
  }

  async update(id: string, updateProgramDto: UpdateProgramDto): Promise<Program> {
    const updatedProgram = await this.programModel
      .findByIdAndUpdate(id, updateProgramDto, { new: true })
      .exec();

    if (!updatedProgram) {
      throw new NotFoundException(`Program with id ${id} not found`);
    }

    return updatedProgram;
  }

  async remove(id: string): Promise<void> {
    const deletedProgram = await this.programModel.findByIdAndDelete(id).exec();
    if (!deletedProgram) {
      throw new NotFoundException(`Program with id ${id} not found`);
    }
  }
}
