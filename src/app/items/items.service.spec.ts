import {ItemsService} from './items.service';
import {Injector, ReflectiveInjector} from '@angular/core';
import {BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('ItemsService', () => {
  let http: Http,
    injector: Injector,
    backend: MockBackend,
    service: ItemsService,
    setConnection: Function;

  beforeEach(() => {
    injector = ReflectiveInjector.resolveAndCreate([
      ItemsService, BaseRequestOptions, MockBackend, {
        provide: Http,
        useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      }
    ]);

    http = injector.get(Http);
    backend = injector.get(MockBackend);
    service = injector.get(ItemsService);

    setConnection = (options): void => {
      const responseOptions = { body: options},
        baseResponse = new Response(new ResponseOptions(responseOptions));

      backend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(baseResponse);
      });
    };
  });

  afterEach(() => backend.verifyNoPendingRequests());

  it('#loadItems', () => {
    const requestBody = {id: 1, name: 'First Item'};

    setConnection(requestBody);
    spyOn(http, 'get').and.callThrough();

    service.loadItems()
      .then((res) => {
        expect(http.get).toHaveBeenCalled();
        expect(res).toEqual(requestBody);
      });
  });

  it('#saveItem', () => {
    const newItem = { id: undefined, name: 'New Item', description: 'Description' },
        existingItem = { id: 1, name: 'Existing Item', description: 'Description' };

    const createItem = spyOn(service, 'createItem').and.callThrough();
    const updateItem = spyOn(service, 'updateItem');

    service.saveItem(newItem);

    expect(service.createItem).toHaveBeenCalled();
    expect(service.updateItem).not.toHaveBeenCalled();

    service.saveItem(existingItem);

    expect(createItem.calls.count()).toEqual(1);
    expect(updateItem).toHaveBeenCalled();
  });

  it('#createItem', () => {
    const requestBody = { id: 1, name: 'First Item', description: 'Described' };

    setConnection(requestBody);
    const post = spyOn(http, 'post').and.callThrough();

    service.createItem(requestBody)
      .then((res) => {
        expect(post.calls.argsFor(0).length).toBe(3);
        expect(res).toEqual(requestBody);
      });
  });

  it('#updateItem', () => {
    const requestBody = { id: 1, name: 'First Item Updated', description: 'Described' };

    setConnection(requestBody);
    const put = spyOn(http, 'put').and.callThrough();

    service.updateItem(requestBody)
      .then((res) => {
        expect(put.calls.argsFor(0).length).toBe(3);
        expect(res).toEqual(requestBody);
      });
  });

  it('#deleteItem', () => {
    const requestBody = { id: 1, name: 'First Item Deleted', description: 'Described' };

    setConnection(requestBody);
    const del = spyOn(http, 'delete').and.callThrough();

    service.deleteItem(requestBody)
      .then((res) => {
        expect(del.calls.argsFor(0).length).toBe(1);
        expect(res).toEqual(requestBody);
      });
  });
});
