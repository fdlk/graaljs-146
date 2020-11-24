import static java.util.concurrent.TimeUnit.MILLISECONDS;

import com.google.common.base.Stopwatch;
import java.io.IOException;
import java.io.InputStreamReader;
import org.graalvm.polyglot.Context;
import org.graalvm.polyglot.Engine;
import org.graalvm.polyglot.Source;

public class Demo {

  public static void main(String[] args) throws IOException {
    var engine = Engine.newBuilder().build();
    var contextBuilder = Context.newBuilder("js").engine(engine);

    var reader = new InputStreamReader(Demo.class.getResourceAsStream("magma.js"));
    var source = Source.newBuilder("js", reader, "magma.js").build();
    var context = contextBuilder.build();
    context.eval(source);
    context.close();

    var stopwatch = Stopwatch.createStarted();
    for (int i = 0; i < 1000; i++) {
      contextBuilder.build();
      context.close();
    }
    System.out.println("Built 1000 contexts in " + stopwatch.elapsed(MILLISECONDS) + "ms");

    stopwatch.reset();
    stopwatch.start();
    for (int i = 0; i < 1000; i++) {
      context = contextBuilder.build();
      context.eval(source);
      context.close();
    }
    System.out.println(
        "Built 1000 contexts + read in library in " + stopwatch.elapsed(MILLISECONDS) + "ms");
  }
}
