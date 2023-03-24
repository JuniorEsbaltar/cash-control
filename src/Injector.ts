export class Injector {
  _container;
  constructor(private _services: any[] = []) {
    this._container = new Map();

    this._services.forEach(service => this._container.set(service, new service()));
  }
}