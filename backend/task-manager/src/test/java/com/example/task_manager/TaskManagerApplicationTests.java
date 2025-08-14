package com.example.task_manager;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TaskManagerApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
    void dummyTestToCheckAddition() {
        assertEquals(4, 2 + 2);
    }

    @Test
    void dummyTestToCheckStringConcat() {
        assertEquals("HelloWorld", "Hello" + "World");
    }

    @Test
    void dummyTestToCheckBoolean() {
        assertEquals(true, 10 > 5);
    }

}
