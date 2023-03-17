
export class CreateCoffeeUnitOfWorkRepositoryCommand {
  constructor(
    public readonly brand: string,
    public readonly name: string,
    public readonly type: string,
    public readonly image: any,
    public readonly description: string,
    public readonly burntLvl: string,
    public readonly reflink: string,
    public readonly CoffeeStatus: string
  ) {}
}
