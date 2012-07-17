MongoMemo
=========
http://shokai-memo2.herokuapp.com

- Node.js 0.6+
- Heroku Cedar
- MongoDB2.0+ / mongoose 2.7+
- MongoLab - https://addons.heroku.com/mongolab
- MongoHQ - https://addons.heroku.com/mongohq


Clone
-----

    % git clone git://github.com/shokai/heroku-express-mongo-memo.git
    % cd heroku-express-mongo-memo


Install Dependencies
--------------------

    % npm install
    % gem install heroku foreman


Run
---

    % foreman start

=> http://localhost:5000


Deploy
------

    % heroku create --stack cedar
    % heroku config:add TZ=Asia/Tokyo

enable addon MongoLab or MongoHQ

    % heroku addons:add mongolab:starter
    % heroku addons:add mongohq:free

deploy

    % git push heroku master
    % heroku open


Console
-------

    % node
    > require('./console');
    > Memo.find().exec(_dump);


LICENSE
=======
(The MIT License)

Copyright (c) 2012 Sho Hashimoto

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
