import { Inject, Injectable, Optional } from "@angular/core";
import { ENV_CONFIG_TOKEN } from "../shared/constant";

@Injectable({ providedIn: 'root' })
export class ConfigService {

  constructor(
    @Optional() @Inject(ENV_CONFIG_TOKEN) public conf: any
  ) { }

  getConfig(): any {
    return this.conf;
  }
}