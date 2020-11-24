package org.example;

import static java.util.concurrent.TimeUnit.MILLISECONDS;
import static org.openjdk.jmh.annotations.Mode.AverageTime;

import java.io.IOException;
import java.io.InputStreamReader;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Context.Builder;
import org.graalvm.polyglot.Engine;
import org.graalvm.polyglot.Source;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Measurement;
import org.openjdk.jmh.annotations.OutputTimeUnit;
import org.openjdk.jmh.annotations.Warmup;

public class Demo {
  static Engine engine = Engine.newBuilder().build();
  static Builder contextBuilder = Context.newBuilder("js").engine(engine);
  static Source source;
  static Source sourceMini;

  static {
    try {
      var reader = new InputStreamReader(Demo.class.getResourceAsStream("magma.js"));
      source = Source.newBuilder("js", reader, "magma.js").build();
      sourceMini = Source.newBuilder("js", "1+2", "small").build();
    } catch (IOException ignore) {
    }
  }

  @Benchmark
  @BenchmarkMode(AverageTime)
  @OutputTimeUnit(MILLISECONDS)
  @Warmup(iterations = 5, time = 500, timeUnit = MILLISECONDS)
  @Measurement(iterations = 5, time = 500, timeUnit = MILLISECONDS)
  public void testEvalScriptAndAddition() {
    var context = contextBuilder.build();
    context.eval(source);
    context.eval(sourceMini);
    context.close();
  }

  @Benchmark
  @BenchmarkMode(AverageTime)
  @OutputTimeUnit(MILLISECONDS)
  @Warmup(iterations = 5, time = 500, timeUnit = MILLISECONDS)
  @Measurement(iterations = 5, time = 500, timeUnit = MILLISECONDS)
  public void testEvalOnlyAddition() {
    var context = contextBuilder.build();
    context.eval(sourceMini);
    context.close();
  }
}
