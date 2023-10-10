import { Exclude, Expose, Transform } from "class-transformer";
import { timestamp } from "rxjs";

@Exclude()
export class EmailContentDto{
    @Expose()
    @Transform(({obj}) => { 
        return obj.receipt.spamVerdict?.status === 'PASS';
    })
    spam: boolean;

    @Expose()
    @Transform(({obj}) => { 
        return obj.receipt.virusVerdict?.status === 'PASS';
    })
    virus: boolean;

    @Expose()
    @Transform(({obj}) => {
        const validateDnsCondition = 
            obj.receipt.spfVerdict?.status === 'PASS' &&
            obj.receipt.dkimVerdict?.status === 'PASS' &&
            obj.receipt.dmarcVerdict?.status ==='PASS'
        return validateDnsCondition;
    })
    dns: boolean;

    @Expose()
    @Transform(({obj})=> {
        const timestampRaw = obj.receipt.timestamp;
        const date = new Date(timestampRaw)
        const month = date.toLocaleString('en-us',{month:'long'})
        return month;
    })
    mes: string;

    @Expose()
    @Transform(({obj}) => { 
        return obj.receipt.processingTimeMillis > 1000;
    })
    retrasado: boolean;

    @Expose()
    @Transform(({obj}) => { 
        return obj.mail.source;
    })
    emisor: string;

    @Expose()
    @Transform(({obj}) => { 
        const receptors: Array<string> = obj.mail.destination;
        const formattedReceptors = receptors.map((receptor) => {
            const receptorEmail = receptor.split('@');
            return receptorEmail[0];
        });
        return formattedReceptors
    })
    receptor: Array<string>;
}