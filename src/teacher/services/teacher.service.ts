import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTeacherDto } from '../dto/create-teacher.dto';
import { UpdateTeacherDto } from '../dto/update-teacher.dto';

import { Teacher } from '../schema/teacher.schema';
import { Program } from 'src/program/schema/program.schema';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
    @InjectModel(Program.name) private readonly programModel: Model<Program>
  ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const createdTeacher = new this.teacherModel(createTeacherDto);
    return createdTeacher.save();
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherModel.find().populate('program').exec(); 
  }

  async findOne(id: string): Promise<Teacher> {
    const teacher = await this.teacherModel.findById(id).populate('program').exec();
    if (!teacher) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }
    return teacher;
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
    const updatedTeacher = await this.teacherModel
      .findByIdAndUpdate(id, updateTeacherDto, { new: true })
      .populate('program')
      .exec();

    if (!updatedTeacher) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }

    return updatedTeacher;
  }

  async remove(id: string): Promise<void> {
    const deletedTeacher = await this.teacherModel.findByIdAndDelete(id).exec();
    if (!deletedTeacher) {
      throw new NotFoundException(`Teacher with id ${id} not found`);
    }
  }
}
