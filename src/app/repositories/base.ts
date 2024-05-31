import { dbManager } from "@/app";
import { BaseEntity, EntityTarget, Repository } from "typeorm";

export abstract class BaseRepository<MODEL extends BaseEntity> {
  protected entityRepository: Repository<MODEL>;
  protected entity: MODEL;

  constructor(entity: MODEL) {
    this.entity = entity;
  }

  protected getRepository() {
    if (!this.entityRepository) {
      this.entityRepository = dbManager
        .getDataSource()
        .getRepository(this.entity.constructor as EntityTarget<MODEL>);
    }

    return this.entityRepository;
  }
}
