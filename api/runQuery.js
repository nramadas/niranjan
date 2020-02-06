const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: [process.env.CASS_CONTACT],
  localDataCenter: process.env.CASS_DATACENTER,
  keyspace: process.env.CASS_KEYSPACE,
});

module.exports = function runQuery(strings, ...args) {
  const query = strings.map(str => str.replace(/\n/gi, '').trim()).join(' ? ');

  return client
    .execute(query, args, { prepare: true })
    .catch(error => console.error(error));
};
