import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  request,
  requestBody,
  requestParam,
  results,
} from 'inversify-express-utils';
import { OK } from 'http-status-codes';
import { Request } from 'express';

import { DOMAIN_APPLICATION_SERVICE_IDENTIFIERS } from 'core/CoreModuleSymbols';
import { ICoffeeService } from 'core/applicationServices/Coffee/ICoffeeService';
import { isAuthenticated } from 'ui/common/config/application/express/auth/middlewares/isAuthenticated';
import { CreateCoffeeCommandBody } from 'ui/portal/Coffee/requests/command/CreateCoffeeCommandBody';
import { DeleteCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/DeleteCoffeeCommand';
import { DeleteCoffeeCommandBody } from 'ui/portal/Coffee/requests/command/DeleteCoffeeCommandBody';
import { AddReviewCommandBody } from 'ui/portal/Coffee/requests/command/AddReviewCommandBody';
import { FindOneCoffeeRepositoryQuery } from 'core/domainServices/Coffee/requests/UnitOfWork/query/FindCoffeeRepositoryQuery';
import { CreateCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/AddCoffeeCommand';
import { UpdateCoffeeCommand } from 'core/applicationServices/Coffee/requests/command/UpdateCoffeeCommand';
import { FindOneCoffeeRepositoryQueryBody } from 'ui/portal/Coffee/requests/query/FindOneCoffeeRepositoryQueryBody';
import { UpdateCoffeeCommandBody } from 'ui/portal/Coffee/requests/command/UpdateCoffeeCommandBody';
import { GetUserReviewsQueryBody } from 'ui/portal/Coffee/requests/query/GetUserReviewsQueryBody';
import { IReviewService } from 'core/applicationServices/Review/IReviewService';
import { GetUserReviewsQuery } from 'core/applicationServices/Review/requests/query/GetUserReviewsQuery';
import { AddReviewCommand } from 'core/applicationServices/Review/requests/command/AddReviewCommand';
import { UpdateReviewCommand } from 'core/applicationServices/Review/requests/command/UpdateReviewCommand';
import { UpdateReviewCommandBody } from 'ui/portal/Coffee/requests/command/UpdateReviewCommandBody';
import { DeleteReviewCommandBody } from 'ui/portal/Coffee/requests/command/DeleteReviewCommandBody';
import { DeleteReviewCommand } from 'core/applicationServices/Review/requests/command/DeleteReviewCommand';
import { uploadSingleImage } from 'ui/common/config/application/express/auth/middlewares/multer';

@controller('/v1/coffee')
export class CoffeeController extends BaseHttpController {
  constructor(
    @inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.COFFEE_SERVICE)
    private readonly coffeeService: ICoffeeService,
    @inject(DOMAIN_APPLICATION_SERVICE_IDENTIFIERS.REVIEW_SERVICE)
    private readonly reviewService: IReviewService
  ) {
    super();
  }

  @httpGet('/')
  async GetAll(): Promise<results.JsonResult> {
    const result = await this.coffeeService.findAll();

    return this.json(result, OK);
  }

  @httpGet('/:id')
  async get(
    @requestParam() { id }: FindOneCoffeeRepositoryQueryBody
  ): Promise<results.JsonResult> {
    const result = await this.coffeeService.findOne(
      new FindOneCoffeeRepositoryQuery(id)
    );
    return this.json(result, OK);
  }

  @httpPost('/create', isAuthenticated(), uploadSingleImage('image'))
  async add(
    @request() data: Request,
    @requestBody()
    {
      brand,
      name,
      type,
      description,
      burntLvl,
      reflink,
      CoffeeStatus,
    }: CreateCoffeeCommandBody
  ): Promise<results.JsonResult> {
    const coffeeCommand = new CreateCoffeeCommand(
      brand,
      name,
      type,
      data.file,
      description,
      burntLvl,
      reflink || '',
      CoffeeStatus
    );

    const result = await this.coffeeService.create(coffeeCommand);
    return this.json(result, OK);
  }

  @httpPut('/:id/update', isAuthenticated())
  async update(
    @requestParam('id') coffeeId: string,
    @requestBody() { coffee }: UpdateCoffeeCommandBody
  ) {
    const result = await this.coffeeService.update(
      new UpdateCoffeeCommand(coffee, coffeeId)
    );

    return this.json(result, OK);
  }

  @httpDelete('/:id', isAuthenticated())
  async delete(
    @requestParam() { id }: DeleteCoffeeCommandBody
  ): Promise<results.JsonResult> {
    const result = await this.coffeeService.delete(new DeleteCoffeeCommand(id));

    return this.json(result, OK);
  }

  @httpGet('/:userId/reviews/', isAuthenticated())
  async GetUserReviews(@requestParam() { userId }: GetUserReviewsQueryBody) {
    const result = await this.reviewService.getAll(
      new GetUserReviewsQuery(userId)
    );
    return this.json(result, OK);
  }

  @httpPost('/:coffeeId/reviews/add', isAuthenticated())
  async addReview(
    @requestParam('coffeeId') coffeeId: string,
    @requestBody()
    { rating, acidity, smell, taste, userId }: AddReviewCommandBody
  ): Promise<results.JsonResult> {
    const result = await this.reviewService.add(
      new AddReviewCommand(userId, coffeeId, rating, acidity, smell, taste)
    );
    return this.json(result, OK);
  }

  @httpPut('/:coffeeId/reviews/:reviewId/update', isAuthenticated())
  async updateReview(
    @requestParam('reviewId') reviewId: string,
    @requestBody() { review }: UpdateReviewCommandBody
  ) {
    const result = this.reviewService.update(
      new UpdateReviewCommand(review, reviewId)
    );

    return this.json(result, OK);
  }

  @httpDelete('/:id/reviews/delete', isAuthenticated())
  async deleteReview(
    @requestParam('reviewId') { reviewId }: DeleteReviewCommandBody
  ) {
    const result = this.reviewService.delete(new DeleteReviewCommand(reviewId));

    return this.json(result, OK);
  }

  // @httpPost('/search')
  // async search(@requestParam() { sortBy, skip, take }: SearchQueryBody) {
  //   const _result = await this.CoffeeService.sortAndPaginate(
  //     new SearchQuery(sortBy, skip, take)
  //   );
  // }
}
