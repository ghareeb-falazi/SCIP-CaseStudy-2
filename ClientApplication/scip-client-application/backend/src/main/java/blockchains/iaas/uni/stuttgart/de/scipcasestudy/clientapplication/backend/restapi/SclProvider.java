package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.restapi;

import com.google.common.base.Strings;

public class SclProvider {
    private static SclProvider instance;

    private SclProvider() {

    }

    public static SclProvider getInstance() {
        if (instance == null) {
            instance = new SclProvider();
        }

        return instance;
    }

    public String getSeafoodScl() {
        String url = System.getenv("SEAFOOD_BAL_URL");
        String scAddress = System.getenv("SEAFOOD_SC_ADDRESS");

        if (Strings.isNullOrEmpty(url)) {
            url = "http://localhost:8090";
        }

        if (Strings.isNullOrEmpty(scAddress)) {
            scAddress = "0xEfA31950097772ceE947d0Ce67927b375997220e";
        }

        return String.format("%s/webapi?blockchain=ethereum&blockchain-id=eth-0&address=%s", url, scAddress);
    }

    public String getDairytScl() {
        String url = System.getenv("DAIRY_BAL_URL");
        String scAddress = System.getenv("DAIRY_SC_ADDRESS");

        if (Strings.isNullOrEmpty(url)) {
            url = "http://localhost:8090";
        }

        if (Strings.isNullOrEmpty(scAddress)) {
            scAddress = "mychannel/dairy";
        }

        return String.format("%s/webapi?blockchain=fabric&blockchain-id=fabric-0&address=%s", url, scAddress);
    }

    public String getCallbackUrl() {
        String envVar = System.getenv("CLIENT_CALLBACK_URL");

        if (Strings.isNullOrEmpty(envVar)) {
            return "http://localhost:9090";
        }

        return envVar;
    }
}
