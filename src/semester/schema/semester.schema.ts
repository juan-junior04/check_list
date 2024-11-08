import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Semester extends Document {
    
  @Prop({ required: true })
  name: string; 

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  semesterNumber: number;

  
}

export const SemesterSchema = SchemaFactory.createForClass(Semester);
