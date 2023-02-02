import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Review, ReviewDocument } from 'src/schemas/review.schema'

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>
  ) {}

  async create(review: Review): Promise<Review> {
    const createdReview = new this.reviewModel(review)
    return createdReview.save()
  }

  async findAll() {
    const review = await this.reviewModel.find()
    return review
  }
  async findOneById(id: string) {
    const review = await this.reviewModel.findById(id)
    if (!review) throw new NotFoundException(`Review with id ${id} not found`)
    return review
  }
}
