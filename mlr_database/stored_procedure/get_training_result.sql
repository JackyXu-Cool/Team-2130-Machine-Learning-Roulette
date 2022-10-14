CREATE DEFINER=`admin`@`%` PROCEDURE `get_training_result`(email varchar(320))
BEGIN

SELECT 
users_history.time_stamp,
 training_result.*
FROM
users_history
inner join training_result on users_history.training_id=training_result.training_id
where users_history.email = email
group by users_history.training_id
ORDER by users_history.time_stamp DESC;
END