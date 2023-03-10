"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReviewRepository", {
    enumerable: true,
    get: ()=>ReviewRepository
});
const _inversify = require("inversify");
const _coreModuleSymbols = require("../../../../core/CoreModuleSymbols");
const _review = require("../../entities/Review");
const _dbmapper = require("../../mappings/DBMapper");
const _repository = require("../common/Repository");
const _infrastructureModuleSymbols = require("../../../InfrastructureModuleSymbols");
const _infrastructureErrors = require("../../../common/errors/InfrastructureErrors");
const _baseError = require("../../../../core/common/errors/BaseError");
var __decorate = (void 0) && (void 0).__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (void 0) && (void 0).__metadata || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (void 0) && (void 0).__param || function(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
};
class ReviewRepository extends _repository.Repository {
    constructor(dbMapper){
        super(_review.Review);
        this.dbMapper = dbMapper;
    }
    async getReviews({ userId  }) {
        const reviews = await this.custom().createQueryBuilder().where('Review.userId = :userId ', {
            userId
        }).getMany();
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
        }, reviews);
    }
    async addReview({ rating , look , smell , taste , userId , coffeeId  }) {
        const review = new _review.Review();
        review.userId = userId;
        review.coffeeId = coffeeId;
        review.look = look;
        review.smell = smell;
        review.taste = taste;
        review.rating = rating;
        const savedReview = await review.save();
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
        }, savedReview);
    }
    async updateReview({ review , reviewId  }) {
        const updatedReview = await this.custom().createQueryBuilder().update(_review.Review).set({
            ...review
        }).where('id = :reviewId', {
            reviewId
        }).execute();
        return updatedReview;
    }
    async deleteReview({ reviewId  }) {
        const result = await this.custom().createQueryBuilder().where('Review.id = :reviewsId ', {
            reviewId
        }).getOne();
        if (!result) {
            throw new _baseError.BaseError(_infrastructureErrors.InfrastructureErrors[_infrastructureErrors.InfrastructureErrors.REVIEW_NOT_FOUND]);
        }
        this.remove(result);
        return this.dbMapper.mapper.map({
            destination: _coreModuleSymbols.DOMAIN_MAPPING_IDENTIFIERS.REVIEW_DOMAIN,
            source: _infrastructureModuleSymbols.DATABASE_MAPPING_IDENTIFIERS.REVIEW_ENTITY
        }, result);
    }
}
ReviewRepository = __decorate([
    __param(0, (0, _inversify.inject)(_infrastructureModuleSymbols.INFRASTRUCTURE_IDENTIFIERS.DB_MAPPER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [
        typeof _dbmapper.DBMapper === "undefined" ? Object : _dbmapper.DBMapper
    ])
], ReviewRepository);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9yZXBvc2l0b3J5L1Jldmlldy9SZXZpZXdSZXBvc2l0b3J5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2ludmVyc2lmeSc7XG5cbmltcG9ydCB7IFVwZGF0ZVJlc3VsdCB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBET01BSU5fTUFQUElOR19JREVOVElGSUVSUyB9IGZyb20gJ2NvcmUvQ29yZU1vZHVsZVN5bWJvbHMnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnY29yZS9kb21haW4vUmV2aWV3L1Jldmlldyc7XG5pbXBvcnQgeyBJUmV2aWV3UmVwb3NpdG9yeSB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvUmV2aWV3L0lSZXZpZXdSZXBvc2l0b3J5JztcbmltcG9ydCB7IEFkZFJldmlld1JlcG9zaXRvcnlDb21tYW5kIH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9SZXZpZXcvcmVxdWVzdHMvY29tbWFuZC9BZGRSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZCc7XG5pbXBvcnQgeyBSZXZpZXcgYXMgUmV2aWV3RW50aXR5IH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvZW50aXRpZXMvUmV2aWV3JztcbmltcG9ydCB7IERCTWFwcGVyIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvZGF0YWJhc2UvbWFwcGluZ3MvREJNYXBwZXInO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ2luZnJhc3RydWN0dXJlL2RhdGFiYXNlL3JlcG9zaXRvcnkvY29tbW9uL1JlcG9zaXRvcnknO1xuaW1wb3J0IHtcbiAgSU5GUkFTVFJVQ1RVUkVfSURFTlRJRklFUlMsXG4gIERBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMsXG59IGZyb20gJ2luZnJhc3RydWN0dXJlL0luZnJhc3RydWN0dXJlTW9kdWxlU3ltYm9scyc7XG5pbXBvcnQgeyBHZXRSZXZpZXdzUmVwb3NpdG9yeVF1ZXJ5IH0gZnJvbSAnY29yZS9kb21haW5TZXJ2aWNlcy9SZXZpZXcvcmVxdWVzdHMvcXVlcnkvR2V0UmV2aWV3c1JlcG9zaXRvcnlRdWVyeSc7XG5pbXBvcnQgeyBVcGRhdGVSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZCB9IGZyb20gJ2NvcmUvZG9tYWluU2VydmljZXMvUmV2aWV3L3JlcXVlc3RzL2NvbW1hbmQvVXBkYXRlUmV2aWV3UmVwb3NpdG9yeUNvbW1hbmQnO1xuaW1wb3J0IHsgRGVsZXRlUmV2aWV3UmVwb3NpdG9yeUNvbW1hbmQgfSBmcm9tICdjb3JlL2RvbWFpblNlcnZpY2VzL1Jldmlldy9yZXF1ZXN0cy9jb21tYW5kL0RlbGV0ZVJldmlld1JlcG9zaXRvcnlDb21tYW5kJztcbmltcG9ydCB7IEluZnJhc3RydWN0dXJlRXJyb3JzIH0gZnJvbSAnaW5mcmFzdHJ1Y3R1cmUvY29tbW9uL2Vycm9ycy9JbmZyYXN0cnVjdHVyZUVycm9ycyc7XG5pbXBvcnQgeyBCYXNlRXJyb3IgfSBmcm9tICdjb3JlL2NvbW1vbi9lcnJvcnMvQmFzZUVycm9yJztcblxuZXhwb3J0IGNsYXNzIFJldmlld1JlcG9zaXRvcnlcbiAgZXh0ZW5kcyBSZXBvc2l0b3J5PFJldmlld0VudGl0eT5cbiAgaW1wbGVtZW50cyBJUmV2aWV3UmVwb3NpdG9yeVxue1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KElORlJBU1RSVUNUVVJFX0lERU5USUZJRVJTLkRCX01BUFBFUilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRiTWFwcGVyOiBEQk1hcHBlclxuICApIHtcbiAgICBzdXBlcihSZXZpZXdFbnRpdHkpO1xuICB9XG5cbiAgYXN5bmMgZ2V0UmV2aWV3cyh7IHVzZXJJZCB9OiBHZXRSZXZpZXdzUmVwb3NpdG9yeVF1ZXJ5KTogUHJvbWlzZTxSZXZpZXdbXT4ge1xuICAgIGNvbnN0IHJldmlld3MgPSBhd2FpdCB0aGlzLmN1c3RvbSgpXG4gICAgICAuY3JlYXRlUXVlcnlCdWlsZGVyKClcbiAgICAgIC53aGVyZSgnUmV2aWV3LnVzZXJJZCA9IDp1c2VySWQgJywgeyB1c2VySWQgfSlcbiAgICAgIC5nZXRNYW55KCk7XG5cbiAgICByZXR1cm4gdGhpcy5kYk1hcHBlci5tYXBwZXIubWFwPFJldmlld0VudGl0eVtdLCBSZXZpZXdbXT4oXG4gICAgICB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBET01BSU5fTUFQUElOR19JREVOVElGSUVSUy5SRVZJRVdfRE9NQUlOLFxuICAgICAgICBzb3VyY2U6IERBVEFCQVNFX01BUFBJTkdfSURFTlRJRklFUlMuUkVWSUVXX0VOVElUWSxcbiAgICAgIH0sXG4gICAgICByZXZpZXdzXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGFkZFJldmlldyh7XG4gICAgcmF0aW5nLFxuICAgIGxvb2ssXG4gICAgc21lbGwsXG4gICAgdGFzdGUsXG4gICAgdXNlcklkLFxuICAgIGNvZmZlZUlkLFxuICB9OiBBZGRSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZCk6IFByb21pc2U8UmV2aWV3PiB7XG4gICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlld0VudGl0eSgpO1xuXG4gICAgcmV2aWV3LnVzZXJJZCA9IHVzZXJJZDtcbiAgICByZXZpZXcuY29mZmVlSWQgPSBjb2ZmZWVJZDtcbiAgICByZXZpZXcubG9vayA9IGxvb2s7XG4gICAgcmV2aWV3LnNtZWxsID0gc21lbGw7XG4gICAgcmV2aWV3LnRhc3RlID0gdGFzdGU7XG4gICAgcmV2aWV3LnJhdGluZyA9IHJhdGluZztcblxuICAgIGNvbnN0IHNhdmVkUmV2aWV3ID0gYXdhaXQgcmV2aWV3LnNhdmUoKTtcblxuICAgIHJldHVybiB0aGlzLmRiTWFwcGVyLm1hcHBlci5tYXA8UmV2aWV3RW50aXR5LCBSZXZpZXc+KFxuICAgICAge1xuICAgICAgICBkZXN0aW5hdGlvbjogRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMuUkVWSUVXX0RPTUFJTixcbiAgICAgICAgc291cmNlOiBEQVRBQkFTRV9NQVBQSU5HX0lERU5USUZJRVJTLlJFVklFV19FTlRJVFksXG4gICAgICB9LFxuICAgICAgc2F2ZWRSZXZpZXdcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlUmV2aWV3KHtcbiAgICByZXZpZXcsXG4gICAgcmV2aWV3SWQsXG4gIH06IFVwZGF0ZVJldmlld1JlcG9zaXRvcnlDb21tYW5kKTogUHJvbWlzZTxVcGRhdGVSZXN1bHQ+IHtcbiAgICBjb25zdCB1cGRhdGVkUmV2aWV3ID0gYXdhaXQgdGhpcy5jdXN0b20oKVxuICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXG4gICAgICAudXBkYXRlKFJldmlld0VudGl0eSlcbiAgICAgIC5zZXQoeyAuLi5yZXZpZXcgfSlcbiAgICAgIC53aGVyZSgnaWQgPSA6cmV2aWV3SWQnLCB7IHJldmlld0lkIH0pXG4gICAgICAuZXhlY3V0ZSgpO1xuXG4gICAgcmV0dXJuIHVwZGF0ZWRSZXZpZXc7XG4gIH1cblxuICBhc3luYyBkZWxldGVSZXZpZXcoe1xuICAgIHJldmlld0lkLFxuICB9OiBEZWxldGVSZXZpZXdSZXBvc2l0b3J5Q29tbWFuZCk6IFByb21pc2U8UmV2aWV3PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jdXN0b20oKVxuICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXG4gICAgICAud2hlcmUoJ1Jldmlldy5pZCA9IDpyZXZpZXdzSWQgJywgeyByZXZpZXdJZCB9KVxuICAgICAgLmdldE9uZSgpO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlRXJyb3IoXG4gICAgICAgIEluZnJhc3RydWN0dXJlRXJyb3JzW0luZnJhc3RydWN0dXJlRXJyb3JzLlJFVklFV19OT1RfRk9VTkRdXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlKHJlc3VsdCk7XG5cbiAgICByZXR1cm4gdGhpcy5kYk1hcHBlci5tYXBwZXIubWFwPFJldmlld0VudGl0eSwgUmV2aWV3PihcbiAgICAgIHtcbiAgICAgICAgZGVzdGluYXRpb246IERPTUFJTl9NQVBQSU5HX0lERU5USUZJRVJTLlJFVklFV19ET01BSU4sXG4gICAgICAgIHNvdXJjZTogREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUy5SRVZJRVdfRU5USVRZLFxuICAgICAgfSxcbiAgICAgIHJlc3VsdFxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZXZpZXdSZXBvc2l0b3J5IiwiUmVwb3NpdG9yeSIsImNvbnN0cnVjdG9yIiwiZGJNYXBwZXIiLCJSZXZpZXdFbnRpdHkiLCJnZXRSZXZpZXdzIiwidXNlcklkIiwicmV2aWV3cyIsImN1c3RvbSIsImNyZWF0ZVF1ZXJ5QnVpbGRlciIsIndoZXJlIiwiZ2V0TWFueSIsIm1hcHBlciIsIm1hcCIsImRlc3RpbmF0aW9uIiwiRE9NQUlOX01BUFBJTkdfSURFTlRJRklFUlMiLCJSRVZJRVdfRE9NQUlOIiwic291cmNlIiwiREFUQUJBU0VfTUFQUElOR19JREVOVElGSUVSUyIsIlJFVklFV19FTlRJVFkiLCJhZGRSZXZpZXciLCJyYXRpbmciLCJsb29rIiwic21lbGwiLCJ0YXN0ZSIsImNvZmZlZUlkIiwicmV2aWV3Iiwic2F2ZWRSZXZpZXciLCJzYXZlIiwidXBkYXRlUmV2aWV3IiwicmV2aWV3SWQiLCJ1cGRhdGVkUmV2aWV3IiwidXBkYXRlIiwic2V0IiwiZXhlY3V0ZSIsImRlbGV0ZVJldmlldyIsInJlc3VsdCIsImdldE9uZSIsIkJhc2VFcnJvciIsIkluZnJhc3RydWN0dXJlRXJyb3JzIiwiUkVWSUVXX05PVF9GT1VORCIsInJlbW92ZSIsImluamVjdCIsIklORlJBU1RSVUNUVVJFX0lERU5USUZJRVJTIiwiREJfTUFQUEVSIl0sIm1hcHBpbmdzIjoiOzs7OytCQXFCYUE7O2FBQUFBOzsyQkFyQlU7bUNBSW9CO3dCQUlKOzBCQUNkOzRCQUNFOzZDQUlwQjtzQ0FJOEI7MkJBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixNQUFNQSx5QkFDSEMsc0JBQVU7SUFHbEJDLFlBRW1CQyxTQUNqQjtRQUNBLEtBQUssQ0FBQ0MsY0FBWTt3QkFGREQ7SUFHbkI7SUFFQSxNQUFNRSxXQUFXLEVBQUVDLE9BQU0sRUFBNkIsRUFBcUI7UUFDekUsTUFBTUMsVUFBVSxNQUFNLElBQUksQ0FBQ0MsTUFBTSxHQUM5QkMsa0JBQWtCLEdBQ2xCQyxLQUFLLENBQUMsNEJBQTRCO1lBQUVKO1FBQU8sR0FDM0NLLE9BQU87UUFFVixPQUFPLElBQUksQ0FBQ1IsUUFBUSxDQUFDUyxNQUFNLENBQUNDLEdBQUcsQ0FDN0I7WUFDRUMsYUFBYUMsNkNBQTBCLENBQUNDLGFBQWE7WUFDckRDLFFBQVFDLHlEQUE0QixDQUFDQyxhQUFhO1FBQ3BELEdBQ0FaO0lBRUo7SUFFQSxNQUFNYSxVQUFVLEVBQ2RDLE9BQU0sRUFDTkMsS0FBSSxFQUNKQyxNQUFLLEVBQ0xDLE1BQUssRUFDTGxCLE9BQU0sRUFDTm1CLFNBQVEsRUFDbUIsRUFBbUI7UUFDOUMsTUFBTUMsU0FBUyxJQUFJdEIsY0FBWTtRQUUvQnNCLE9BQU9wQixNQUFNLEdBQUdBO1FBQ2hCb0IsT0FBT0QsUUFBUSxHQUFHQTtRQUNsQkMsT0FBT0osSUFBSSxHQUFHQTtRQUNkSSxPQUFPSCxLQUFLLEdBQUdBO1FBQ2ZHLE9BQU9GLEtBQUssR0FBR0E7UUFDZkUsT0FBT0wsTUFBTSxHQUFHQTtRQUVoQixNQUFNTSxjQUFjLE1BQU1ELE9BQU9FLElBQUk7UUFFckMsT0FBTyxJQUFJLENBQUN6QixRQUFRLENBQUNTLE1BQU0sQ0FBQ0MsR0FBRyxDQUM3QjtZQUNFQyxhQUFhQyw2Q0FBMEIsQ0FBQ0MsYUFBYTtZQUNyREMsUUFBUUMseURBQTRCLENBQUNDLGFBQWE7UUFDcEQsR0FDQVE7SUFFSjtJQUVBLE1BQU1FLGFBQWEsRUFDakJILE9BQU0sRUFDTkksU0FBUSxFQUNzQixFQUF5QjtRQUN2RCxNQUFNQyxnQkFBZ0IsTUFBTSxJQUFJLENBQUN2QixNQUFNLEdBQ3BDQyxrQkFBa0IsR0FDbEJ1QixNQUFNLENBQUM1QixjQUFZLEVBQ25CNkIsR0FBRyxDQUFDO1lBQUUsR0FBR1AsTUFBTTtRQUFDLEdBQ2hCaEIsS0FBSyxDQUFDLGtCQUFrQjtZQUFFb0I7UUFBUyxHQUNuQ0ksT0FBTztRQUVWLE9BQU9IO0lBQ1Q7SUFFQSxNQUFNSSxhQUFhLEVBQ2pCTCxTQUFRLEVBQ3NCLEVBQW1CO1FBQ2pELE1BQU1NLFNBQVMsTUFBTSxJQUFJLENBQUM1QixNQUFNLEdBQzdCQyxrQkFBa0IsR0FDbEJDLEtBQUssQ0FBQywyQkFBMkI7WUFBRW9CO1FBQVMsR0FDNUNPLE1BQU07UUFFVCxJQUFJLENBQUNELFFBQVE7WUFDWCxNQUFNLElBQUlFLG9CQUFTLENBQ2pCQywwQ0FBb0IsQ0FBQ0EsMENBQW9CLENBQUNDLGdCQUFnQixDQUFDLEVBQzNEO1FBQ0osQ0FBQztRQUVELElBQUksQ0FBQ0MsTUFBTSxDQUFDTDtRQUVaLE9BQU8sSUFBSSxDQUFDakMsUUFBUSxDQUFDUyxNQUFNLENBQUNDLEdBQUcsQ0FDN0I7WUFDRUMsYUFBYUMsNkNBQTBCLENBQUNDLGFBQWE7WUFDckRDLFFBQVFDLHlEQUE0QixDQUFDQyxhQUFhO1FBQ3BELEdBQ0FpQjtJQUVKO0FBQ0Y7QUE1RmFwQztJQUtSMEMsV0FBQUEsSUFBQUEsaUJBQU0sRUFBQ0MsdURBQTBCLENBQUNDLFNBQVM7OztlQUNqQixrQkFBUSw0QkFBUixrQkFBUTs7R0FOMUI1QyJ9