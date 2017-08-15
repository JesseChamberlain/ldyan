SAFARI:
2017-08-13T12:06:48.126769+00:00 heroku[router]: at=info method=GET path="/api/v1/songs" host=ldyan.herokuapp.com request_id=2710944a-cb49-40ef-850f-c23abb6e1a33 fwd="73.60.107.1" dyno=web.1 connect=1ms service=136ms status=200 bytes=1390 protocol=https
2017-08-13T12:06:58.770870+00:00 heroku[router]: sock=client at=warning code=H27 desc="Client Request Interrupted" method=PATCH path="/api/v1/songs/6" host=ldyan.herokuapp.com request_id=e563bf02-449b-4766-a301-8e29f83f75a4 fwd="73.60.107.1" dyno=web.1 connect=1ms service=0ms status=499 bytes=0 protocol=https
2017-08-13T12:06:58.839037+00:00 heroku[router]: at=info method=GET path="/songs?name=Dionisiozzz&description=The+Builder" host=ldyan.herokuapp.com request_id=be4b423e-d836-455d-bf0e-93eb1897a15f fwd="73.60.107.1" dyno=web.1 connect=1ms service=14ms status=200 bytes=2077 protocol=https
2017-08-13T12:06:58.781492+00:00 app[web.1]: [2017-08-13 12:06:58] ERROR invalid body size.
2017-08-13T12:06:58.782216+00:00 app[web.1]: 10.179.86.73 - - [13/Aug/2017:12:06:58 UTC] "PATCH /api/v1/songs/6 HTTP/1.1" 400 287
2017-08-13T12:06:58.782283+00:00 app[web.1]: https://ldyan.herokuapp.com/songs -> /api/v1/songs/6

CHROME:
2017-08-13T12:05:43.985401+00:00 heroku[router]: at=info method=GET path="/api/v1/songs" host=ldyan.herokuapp.com request_id=96c8057f-6775-41be-b68a-6907da151be7 fwd="73.60.107.1" dyno=web.1 connect=1ms service=132ms status=304 bytes=986 protocol=https
2017-08-13T12:05:56.228193+00:00 app[web.1]: [398c2453-02e4-4835-adca-2ad146b3a65c] Started PATCH "/api/v1/songs/6" for 73.60.107.1 at 2017-08-13 12:05:56 +0000
2017-08-13T12:05:56.233940+00:00 app[web.1]: [398c2453-02e4-4835-adca-2ad146b3a65c] Processing by Api::V1::SongsController#update as */*
2017-08-13T12:05:56.233943+00:00 app[web.1]: [398c2453-02e4-4835-adca-2ad146b3a65c]   Parameters: {"id"=>"6"}
2017-08-13T12:05:56.268866+00:00 app[web.1]: [398c2453-02e4-4835-adca-2ad146b3a65c]   Song Load (3.5ms)  SELECT  "songs".* FROM "songs" WHERE "songs"."id" = $1 LIMIT $2  [["id", 6], ["LIMIT", 1]]
2017-08-13T12:05:56.241210+00:00 app[web.1]: [398c2453-02e4-4835-adca-2ad146b3a65c]   User Load (3.1ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 ORDER BY "users"."id" ASC LIMIT $2  [["id", 1], ["LIMIT", 1]]
2017-08-13T12:05:56.291876+00:00 app[web.1]: [398c2453-02e4-4835-adca-2ad146b3a65c]    (1.2ms)  BEGIN
2017-08-13T12:05:56.313762+00:00 app[web.1]: [398c2453-02e4-4835-adca-2ad146b3a65c]   SQL (1.0ms)  UPDATE "songs" SET "name" = $1, "updated_at" = $2 WHERE "songs"."id" = $3  [["name", "Dionisiooo"], ["updated_at", "2017-08-13 12:05:56.292868"], ["id", 6]]
2017-08-13T12:05:56.318259+00:00 app[web.1]: [398c2453-02e4-4835-adca-2ad146b3a65c]    (1.8ms)  COMMIT
2017-08-13T12:05:56.321520+00:00 app[web.1]: [398c2453-02e4-4835-adca-2ad146b3a65c] Completed 200 OK in 87ms (Views: 2.0ms | ActiveRecord: 12.0ms)
2017-08-13T12:05:56.325995+00:00 app[web.1]: 10.71.208.122 - - [13/Aug/2017:12:05:56 UTC] "PATCH /api/v1/songs/6 HTTP/1.1" 200 26
2017-08-13T12:05:56.337903+00:00 app[web.1]: https://ldyan.herokuapp.com/songs -> /api/v1/songs/6
