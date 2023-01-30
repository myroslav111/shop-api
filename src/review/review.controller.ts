import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Review } from 'src/schemas/review.schema'
import { ReviewService } from './review.service'

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: Review) {
    return this.reviewService.create(createReviewDto)
  }

  @Get()
  findAll() {
    return this.reviewService.findAll()
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    // console.log(typeof(id) )
    return this.reviewService.findOneById(id)
  }
}
