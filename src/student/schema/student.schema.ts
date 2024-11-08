import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Semester } from 'src/semester/schema/semester.schema';

@Schema()
export class Student extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  idCard: string; 

  @Prop({ required: true })
  birthDate: Date;

  @Prop()
  age: number;

  @Prop()
  phone: string;

  @Prop({ type: Types.ObjectId, ref: 'Semester', required: true })
  semester: Types.ObjectId; 

  @Prop({ required: true })
  degree: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
