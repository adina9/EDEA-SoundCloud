export const asyncStorageService = {
  query,
  get,
  post,
  put,
  postMany,
}



function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || []
  return Promise.resolve(entities)
}

function get(entityType, entityKey) {
  return query(entityType)
    .then(entities => {
      return entities.find(entity => entity.key === entityKey)
    })
}

function post(entityType, newEntity) {
  return query(entityType)
    .then(entities => {
      entities.push(newEntity);
      _save(entityType, entities)
      return entities;
    })
}

function postMany(entityType, newEntities) {
  return query(entityType)
    .then(entities => {
      entities.push(...newEntities);
      _save(entityType, entities)
      return entities;
    })
}

function put(entityType, updatedEntity) {
  return query(entityType)
    .then(entities => {
      const idx = entities.findIndex(entity => entity._id === updatedEntity._id);
      entities.splice(idx, 1, updatedEntity)
      _save(entityType, entities)
      return entities;
    })
}


function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}
