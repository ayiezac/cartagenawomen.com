self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {title: 'Hello', body: 'Hello World', icon:'/bookmark/icon-512x512.png'};
  

    const options = {
      body: data.body,
      icon: '/bookmark/icon-512x512.png',
      badge:'/bookmark/icon-512x512.png'
    };
  
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  });
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
      clients.matchAll({ type: 'window' }).then(function(clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
    );
  });


  