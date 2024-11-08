import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Program } from 'src/program/schema/program.schema';

@Schema()
export class Teacher extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  age: number;

  @Prop({ required: true })
  birthDate: Date;

  @Prop()
  title: string;

  @Prop({ required: true, unique: true })
  idCard: string;  

  @Prop({ default: Date.now })
  hireDate: Date;

  @Prop({ type: Types.ObjectId, ref: 'Program', required: true })
  program: Types.ObjectId;  
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
