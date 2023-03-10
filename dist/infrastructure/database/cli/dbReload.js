"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _path = require("path");
const _yargs = /*#__PURE__*/ _interopRequireWildcard(require("yargs"));
const _typeorm = require("typeorm");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const { type , host , port , username , password , database , logging , migrations  } = require((0, _path.join)(process.cwd(), 'ormconfig.cjs'))[0];
_yargs.command({
    command: 'reload',
    describe: 'Reload Database',
    handler: ()=>{
        try {
            const connectionOptions = {
                database,
                host,
                logging,
                migrations,
                password,
                port,
                type,
                username
            };
            (0, _typeorm.createConnection)(connectionOptions).then(async (connection)=>{
                await connection.dropDatabase();
                await connection.runMigrations();
                process.exit(0);
            });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error when reloading database', error);
            process.exit(1);
        }
    }
}).parse();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYXN0cnVjdHVyZS9kYXRhYmFzZS9jbGkvZGJSZWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgKiBhcyB5YXJncyBmcm9tICd5YXJncyc7XG5cbmltcG9ydCB7IENvbm5lY3Rpb24sIGNyZWF0ZUNvbm5lY3Rpb24sIENvbm5lY3Rpb25PcHRpb25zIH0gZnJvbSAndHlwZW9ybSc7XG5cbmNvbnN0IHtcbiAgdHlwZSxcbiAgaG9zdCxcbiAgcG9ydCxcbiAgdXNlcm5hbWUsXG4gIHBhc3N3b3JkLFxuICBkYXRhYmFzZSxcbiAgbG9nZ2luZyxcbiAgbWlncmF0aW9ucyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1keW5hbWljLXJlcXVpcmUsIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbn0gPSByZXF1aXJlKGpvaW4ocHJvY2Vzcy5jd2QoKSwgJ29ybWNvbmZpZy5janMnKSlbMF07XG5cbnlhcmdzXG4gIC5jb21tYW5kKHtcbiAgICBjb21tYW5kOiAncmVsb2FkJyxcbiAgICBkZXNjcmliZTogJ1JlbG9hZCBEYXRhYmFzZScsXG4gICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbk9wdGlvbnM6IENvbm5lY3Rpb25PcHRpb25zID0ge1xuICAgICAgICAgIGRhdGFiYXNlLFxuICAgICAgICAgIGhvc3QsXG4gICAgICAgICAgbG9nZ2luZyxcbiAgICAgICAgICBtaWdyYXRpb25zLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgIHBvcnQsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgY3JlYXRlQ29ubmVjdGlvbihjb25uZWN0aW9uT3B0aW9ucykudGhlbihcbiAgICAgICAgICBhc3luYyAoY29ubmVjdGlvbjogQ29ubmVjdGlvbikgPT4ge1xuICAgICAgICAgICAgYXdhaXQgY29ubmVjdGlvbi5kcm9wRGF0YWJhc2UoKTtcbiAgICAgICAgICAgIGF3YWl0IGNvbm5lY3Rpb24ucnVuTWlncmF0aW9ucygpO1xuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDApO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoZW4gcmVsb2FkaW5nIGRhdGFiYXNlJywgZXJyb3IpO1xuICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSlcbiAgLnBhcnNlKCk7XG4iXSwibmFtZXMiOlsidHlwZSIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwibG9nZ2luZyIsIm1pZ3JhdGlvbnMiLCJyZXF1aXJlIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJ5YXJncyIsImNvbW1hbmQiLCJkZXNjcmliZSIsImhhbmRsZXIiLCJjb25uZWN0aW9uT3B0aW9ucyIsImNyZWF0ZUNvbm5lY3Rpb24iLCJ0aGVuIiwiY29ubmVjdGlvbiIsImRyb3BEYXRhYmFzZSIsInJ1bk1pZ3JhdGlvbnMiLCJleGl0IiwiZXJyb3IiLCJjb25zb2xlIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7c0JBQXFCOzZEQUVFO3lCQUV5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxNQUFNLEVBQ0pBLEtBQUksRUFDSkMsS0FBSSxFQUNKQyxLQUFJLEVBQ0pDLFNBQVEsRUFDUkMsU0FBUSxFQUNSQyxTQUFRLEVBQ1JDLFFBQU8sRUFDUEMsV0FBVSxFQUVYLEdBQUdDLFFBQVFDLElBQUFBLFVBQUksRUFBQ0MsUUFBUUMsR0FBRyxJQUFJLGlCQUFpQixDQUFDLEVBQUU7QUFFcERDLE9BQ0dDLE9BQU8sQ0FBQztJQUNQQSxTQUFTO0lBQ1RDLFVBQVU7SUFDVkMsU0FBUyxJQUFNO1FBQ2IsSUFBSTtZQUNGLE1BQU1DLG9CQUF1QztnQkFDM0NYO2dCQUNBSjtnQkFDQUs7Z0JBQ0FDO2dCQUNBSDtnQkFDQUY7Z0JBQ0FGO2dCQUNBRztZQUNGO1lBQ0FjLElBQUFBLHlCQUFnQixFQUFDRCxtQkFBbUJFLElBQUksQ0FDdEMsT0FBT0MsYUFBMkI7Z0JBQ2hDLE1BQU1BLFdBQVdDLFlBQVk7Z0JBQzdCLE1BQU1ELFdBQVdFLGFBQWE7Z0JBQzlCWCxRQUFRWSxJQUFJLENBQUM7WUFDZjtRQUVKLEVBQUUsT0FBT0MsT0FBTztZQUNkLHNDQUFzQztZQUN0Q0MsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDL0NiLFFBQVFZLElBQUksQ0FBQztRQUNmO0lBQ0Y7QUFDRixHQUNDRyxLQUFLIn0=