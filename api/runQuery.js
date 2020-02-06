const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'dev',
});

module.exports = function runQuery(strings, ...args) {
  const query = strings.map(str => str.replace(/\n/gi, '').trim()).join(' ? ');

  return client
    .execute(query, args, { prepare: true })
    .catch(error => console.error(error));
};
