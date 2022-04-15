# Infrastructure description

## Database
* Used Amazon RDS for postgres database 
- DB identifier: postgres
- Class: db.t3.micro
- Engine: PostgreSQL
- Region & AZ: us-east-1b
- Port: 5432
- Endpoint: postgres.cintazsqqcgp.us-east-1.rds.amazonaws.com

## API
* Used AWS ElasticBeanstalk for the API
- Application name: udagram-api
- Environment name: Udagramapi-env
- Platform: Node JS 16
- Region: us-east-1
- Backend URL: http://Udagramapi-env.eba-7qcwf2nd.us-east-1.elasticbeanstalk.com/api/v0 

## Web Hosting 
* Used AWS S3 for web hosting
- Bucket name: udagram-frontend113
- Region: us-east-1
- Frontend URL: http://udagram-frontend113.s3-website-us-east-1.amazonaws.com
