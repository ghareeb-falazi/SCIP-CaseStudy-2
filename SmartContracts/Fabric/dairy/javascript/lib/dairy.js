/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

/**
 * This contract allows all milk supply chain's involved actors to log their operations in a persistent way
 */
class diary extends Contract {
  /**
   * Register a new milk batch in the supply chain ecosystem
   * @param {string} batchId identifier of the batch
   * @param {string} ranchName name of the ranch where the milk was produced
   * @param {string} location place where the ranch is located
   * @param {number} amount amount of milk in the batch
   */
  static async registerMilkBatch(ctx, batchId, ranchName, location, amount) {
    console.info('============= START : registerMilkBatch ===========');

    const batchesRegister = 'bacthesRegister';
    const newBatch = {
      ranchName: ranchName,
      location: location,
      amout: amount,
    };
    const batchesAsBytes = await ctx.stub.getState(batchesRegister);
    const batches = JSON.parse(batchesAsBytes.toString());
    batches[batchId] = newBatch;
    await ctx.stub.putState(batchesRegister, Buffer.from(JSON.stringify(batches)));
    ctx.stub.setEvent(
      'milkBatchRegistered',
      Buffer.from(
        JSON.stringify({
          [batchId]: newBatch,
        }),
      ),
    );

    console.info('============= END   : registerMilkBatch ===========');
  }

  /**
   * Register that a milk batch was transported, assumed that one entire milk batch is transported at once
   * @param {string} logisticsFirmName name of the firm that has transported the milk batch
   * @param {string} toLocation place where the batch was transported to
   * @param {string} batchId identifier of the milk batch
   */
  async transportMilkBatch(ctx, logisticsFirmName, toLocation, batchId) {
    console.info('============= START : transportMilkBatch ===========');

    const batchesTransports = 'batchesTransports';
    const newTransport = {
      logisticsFirmName: logisticsFirmName,
      toLocation: toLocation,
    };
    const transportsAsBytes = await ctx.stub.getState(batchesTransports);
    const transports = JSON.parse(transportsAsBytes.toString());
    transports[batchId] = newTransport;
    await ctx.stub.putState(batchesTransports, Buffer.from(JSON.stringify(transports)));
    ctx.stub.setEvent(
      'milkBatchTransported',
      Buffer.from(
        JSON.stringify({
          [batchId]: newTransport,
        }),
      ),
    );

    console.info('============= END   : transportMilkBatch ===========');
  }

  /**
   * Register a new milk carton, assumed that at the processing facility, milk from multiple batches is mixed, therefore, a single milk carton could contain milk of multiple batches
   * @param {string} processorFirmName name of the firm that has processed the milk carton
   * @param {string} location place where the processing has taken place
   * @param {string} originBatchIds identifiers of the batches from which the milk was taken
   * @param {string} cartonId identifier of the new milk carton
   */
  async registerMilkCarton(ctx, processorFirmName, location, originBatchIds, cartonId) {
    console.info('============= START : registerMilkCarton ===========');

    const cartonsRegister = 'cartonsRegister';
    const newCarton = {
      processorFirmName: processorFirmName,
      location: location,
      originBatchIds: originBatchIds,
    };
    const cartonsAsBytes = await ctx.stub.getState(cartonsRegister);
    const cartons = JSON.parse(cartonsAsBytes.toString());
    cartons[cartonId] = newCarton;
    await ctx.stub.putState(cartonsRegister, Buffer.from(JSON.stringify(cartons)));
    ctx.stub.setEvent(
      'cartonRegistered',
      Buffer.from(
        JSON.stringify({
          [cartonId]: newCarton,
        }),
      ),
    );

    console.info('============= END   : registerMilkCarton ===========');
  }

  /**
   * Register that a new milk carton was transported
   * @param {string} distributorName name of the distributor
   * @param {string} toLocation place where the carton was transported to
   * @param {string} cartonId identifier of the carton
   */
  async transportCarton(ctx, distributorName, toLocation, cartonId) {
    console.info('============= START : transportCarton ===========');

    const cartonsTransports = 'cartonsTransports';
    const newTransport = {
      distributorName: distributorName,
      toLocation: toLocation,
    };
    const transportsAsBytes = await ctx.stub.getState(cartonsTransports);
    const transports = JSON.parse(transportsAsBytes.toString());
    transports[cartonId] = newTransport;
    await ctx.stub.putState(cartonsTransports, Buffer.from(JSON.stringify(transports)));
    ctx.stub.setEvent(
      'cartonTransported',
      Buffer.from(
        JSON.stringify({
          [cartonId]: newTransport,
        }),
      ),
    );

    console.info('============= END   : transportCarton ===========');
  }

  /**
   * Register that a milk carton was stored in the inventory
   * @param {string} retailerName name of the reatiler who will sell the carton
   * @param {string} cartonId identifier of the carton
   */
  async registerCartonInInventory(ctx, retailerName, cartonId) {
    console.info('============= START : registerCartonInInventory ===========');

    const cartonsInventory = 'cartonsInventory';
    const inventoryAsBytes = await ctx.stub.getState(cartonsInventory);
    const inventory = JSON.parse(inventoryAsBytes.toString());
    inventory[cartonId] = retailerName;
    await ctx.stub.putState(cartonsInventory, Buffer.from(JSON.stringify(inventory)));
    ctx.stub.setEvent(
      'cartonRegisteredInInventory',
      Buffer.from(
        JSON.stringify({
          [cartonId]: retailerName,
        }),
      ),
    );

    console.info('============= END   : registerCartonInInventory ===========');
  }

  /**
   * Register a new sale
   * @param {string} cartonId identifier of the carton
   */
  async registerSelling(ctx, cartonId) {
    console.info('============= START : registerSelling ===========');

    const cartonsSales = 'cartonsSales';
    const salesAsBytes = await ctx.stub.getState(cartonsSales);
    const sales = JSON.parse(salesAsBytes.toString());
    sales.push(cartonId);
    await ctx.stub.putState(cartonsSales, Buffer.from(JSON.stringify(sales)));
    ctx.stub.setEvent('cartonSold', Buffer.from(
        JSON.stringify({
          [cartonId]: retailerName,
        })
      ));

    console.info('============= END   : registerSelling ===========');
  }
}

module.exports = diary;
