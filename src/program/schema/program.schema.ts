import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Program extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  credits: number;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ type: Types.ObjectId, ref: 'Semester', required: true })
  semester: Types.ObjectId; 
}

export const ProgramSchema = SchemaFactory.createForClass(Program);
