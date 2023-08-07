-- migrate:up

CREATE TABLE
    trip (
        trip_id INT PRIMARY KEY AUTO_INCREMENT,
        pickup_address VARCHAR(255) NOT NULL,
        destination_address VARCHAR(255) NOT NULL
    );

-- migrate:down

DROP TABLE trip;